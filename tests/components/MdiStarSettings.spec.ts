
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStarSettings from "../../src/components/MdiStarSettings.vue";

test("MdiStarSettings snapshot", () => {
  const wrapper = mount(MdiStarSettings, {});
  expect(wrapper.html()).toMatchSnapshot();
});
