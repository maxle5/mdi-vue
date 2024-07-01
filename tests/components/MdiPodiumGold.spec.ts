
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPodiumGold from "../../src/components/MdiPodiumGold.vue";

test("MdiPodiumGold snapshot", () => {
  const wrapper = mount(MdiPodiumGold, {});
  expect(wrapper.html()).toMatchSnapshot();
});
