
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDrone from "../../src/components/MdiDrone.vue";

test("MdiDrone snapshot", () => {
  const wrapper = mount(MdiDrone, {});
  expect(wrapper.html()).toMatchSnapshot();
});
