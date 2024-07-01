
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVideoPlusOutline from "../../src/components/MdiVideoPlusOutline.vue";

test("MdiVideoPlusOutline snapshot", () => {
  const wrapper = mount(MdiVideoPlusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
