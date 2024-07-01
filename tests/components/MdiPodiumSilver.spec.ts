
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPodiumSilver from "../../src/components/MdiPodiumSilver.vue";

test("MdiPodiumSilver snapshot", () => {
  const wrapper = mount(MdiPodiumSilver, {});
  expect(wrapper.html()).toMatchSnapshot();
});
