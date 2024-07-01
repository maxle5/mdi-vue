
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPodiumBronze from "../../src/components/MdiPodiumBronze.vue";

test("MdiPodiumBronze snapshot", () => {
  const wrapper = mount(MdiPodiumBronze, {});
  expect(wrapper.html()).toMatchSnapshot();
});
