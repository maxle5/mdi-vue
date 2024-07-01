
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiApps from "../../src/components/MdiApps.vue";

test("MdiApps snapshot", () => {
  const wrapper = mount(MdiApps, {});
  expect(wrapper.html()).toMatchSnapshot();
});
