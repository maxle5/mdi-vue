
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRacingHelmet from "../../src/components/MdiRacingHelmet.vue";

test("MdiRacingHelmet snapshot", () => {
  const wrapper = mount(MdiRacingHelmet, {});
  expect(wrapper.html()).toMatchSnapshot();
});
