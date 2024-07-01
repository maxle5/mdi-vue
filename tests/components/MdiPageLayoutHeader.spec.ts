
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPageLayoutHeader from "../../src/components/MdiPageLayoutHeader.vue";

test("MdiPageLayoutHeader snapshot", () => {
  const wrapper = mount(MdiPageLayoutHeader, {});
  expect(wrapper.html()).toMatchSnapshot();
});
