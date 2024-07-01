
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAppsBox from "../../src/components/MdiAppsBox.vue";

test("MdiAppsBox snapshot", () => {
  const wrapper = mount(MdiAppsBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
