
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAndroid from "../../src/components/MdiAndroid.vue";

test("MdiAndroid snapshot", () => {
  const wrapper = mount(MdiAndroid, {});
  expect(wrapper.html()).toMatchSnapshot();
});
