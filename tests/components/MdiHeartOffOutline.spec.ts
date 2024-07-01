
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHeartOffOutline from "../../src/components/MdiHeartOffOutline.vue";

test("MdiHeartOffOutline snapshot", () => {
  const wrapper = mount(MdiHeartOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
