
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTempleBuddhistOutline from "../../src/components/MdiTempleBuddhistOutline.vue";

test("MdiTempleBuddhistOutline snapshot", () => {
  const wrapper = mount(MdiTempleBuddhistOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
