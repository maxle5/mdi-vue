
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDatabaseSettings from "../../src/components/MdiDatabaseSettings.vue";

test("MdiDatabaseSettings snapshot", () => {
  const wrapper = mount(MdiDatabaseSettings, {});
  expect(wrapper.html()).toMatchSnapshot();
});
