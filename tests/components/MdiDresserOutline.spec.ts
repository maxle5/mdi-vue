
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDresserOutline from "../../src/components/MdiDresserOutline.vue";

test("MdiDresserOutline snapshot", () => {
  const wrapper = mount(MdiDresserOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
