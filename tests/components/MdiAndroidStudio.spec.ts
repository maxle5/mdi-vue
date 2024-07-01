
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAndroidStudio from "../../src/components/MdiAndroidStudio.vue";

test("MdiAndroidStudio snapshot", () => {
  const wrapper = mount(MdiAndroidStudio, {});
  expect(wrapper.html()).toMatchSnapshot();
});
