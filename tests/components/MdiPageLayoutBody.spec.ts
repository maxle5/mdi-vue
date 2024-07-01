
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPageLayoutBody from "../../src/components/MdiPageLayoutBody.vue";

test("MdiPageLayoutBody snapshot", () => {
  const wrapper = mount(MdiPageLayoutBody, {});
  expect(wrapper.html()).toMatchSnapshot();
});
