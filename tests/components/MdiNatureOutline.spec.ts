
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNatureOutline from "../../src/components/MdiNatureOutline.vue";

test("MdiNatureOutline snapshot", () => {
  const wrapper = mount(MdiNatureOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
