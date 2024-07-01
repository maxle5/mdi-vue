
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEmailOpenHeartOutline from "../../src/components/MdiEmailOpenHeartOutline.vue";

test("MdiEmailOpenHeartOutline snapshot", () => {
  const wrapper = mount(MdiEmailOpenHeartOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
