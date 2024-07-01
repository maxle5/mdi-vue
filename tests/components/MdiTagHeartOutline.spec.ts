
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTagHeartOutline from "../../src/components/MdiTagHeartOutline.vue";

test("MdiTagHeartOutline snapshot", () => {
  const wrapper = mount(MdiTagHeartOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
