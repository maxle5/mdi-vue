
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGooglePodcast from "../../src/components/MdiGooglePodcast.vue";

test("MdiGooglePodcast snapshot", () => {
  const wrapper = mount(MdiGooglePodcast, {});
  expect(wrapper.html()).toMatchSnapshot();
});
