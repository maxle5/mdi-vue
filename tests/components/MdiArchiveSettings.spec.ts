
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArchiveSettings from "../../src/components/MdiArchiveSettings.vue";

test("MdiArchiveSettings snapshot", () => {
  const wrapper = mount(MdiArchiveSettings, {});
  expect(wrapper.html()).toMatchSnapshot();
});
