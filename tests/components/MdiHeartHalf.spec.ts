
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHeartHalf from "../../src/components/MdiHeartHalf.vue";

test("MdiHeartHalf snapshot", () => {
  const wrapper = mount(MdiHeartHalf, {});
  expect(wrapper.html()).toMatchSnapshot();
});
