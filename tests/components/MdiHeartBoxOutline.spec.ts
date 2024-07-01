
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHeartBoxOutline from "../../src/components/MdiHeartBoxOutline.vue";

test("MdiHeartBoxOutline snapshot", () => {
  const wrapper = mount(MdiHeartBoxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
