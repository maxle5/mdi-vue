
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCheckBold from "../../src/components/MdiCheckBold.vue";

test("MdiCheckBold snapshot", () => {
  const wrapper = mount(MdiCheckBold, {});
  expect(wrapper.html()).toMatchSnapshot();
});
