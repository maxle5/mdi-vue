
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPodcast from "../../src/components/MdiPodcast.vue";

test("MdiPodcast snapshot", () => {
  const wrapper = mount(MdiPodcast, {});
  expect(wrapper.html()).toMatchSnapshot();
});
