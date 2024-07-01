
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHeartCircleOutline from "../../src/components/MdiHeartCircleOutline.vue";

test("MdiHeartCircleOutline snapshot", () => {
  const wrapper = mount(MdiHeartCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
