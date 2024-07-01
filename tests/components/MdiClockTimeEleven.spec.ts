
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClockTimeEleven from "../../src/components/MdiClockTimeEleven.vue";

test("MdiClockTimeEleven snapshot", () => {
  const wrapper = mount(MdiClockTimeEleven, {});
  expect(wrapper.html()).toMatchSnapshot();
});
