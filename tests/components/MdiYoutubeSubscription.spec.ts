
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiYoutubeSubscription from "../../src/components/MdiYoutubeSubscription.vue";

test("MdiYoutubeSubscription snapshot", () => {
  const wrapper = mount(MdiYoutubeSubscription, {});
  expect(wrapper.html()).toMatchSnapshot();
});
