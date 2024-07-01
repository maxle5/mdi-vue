
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHeadHeartOutline from "../../src/components/MdiHeadHeartOutline.vue";

test("MdiHeadHeartOutline snapshot", () => {
  const wrapper = mount(MdiHeadHeartOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
