
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiOctagramOutline from "../../src/components/MdiOctagramOutline.vue";

test("MdiOctagramOutline snapshot", () => {
  const wrapper = mount(MdiOctagramOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
