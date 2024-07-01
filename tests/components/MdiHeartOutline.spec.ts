
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHeartOutline from "../../src/components/MdiHeartOutline.vue";

test("MdiHeartOutline snapshot", () => {
  const wrapper = mount(MdiHeartOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
