
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPlusBoxOutline from "../../src/components/MdiPlusBoxOutline.vue";

test("MdiPlusBoxOutline snapshot", () => {
  const wrapper = mount(MdiPlusBoxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
