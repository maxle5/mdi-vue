
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLightbulbSpot from "../../src/components/MdiLightbulbSpot.vue";

test("MdiLightbulbSpot snapshot", () => {
  const wrapper = mount(MdiLightbulbSpot, {});
  expect(wrapper.html()).toMatchSnapshot();
});
