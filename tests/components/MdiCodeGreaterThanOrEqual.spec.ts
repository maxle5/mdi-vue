
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCodeGreaterThanOrEqual from "../../src/components/MdiCodeGreaterThanOrEqual.vue";

test("MdiCodeGreaterThanOrEqual snapshot", () => {
  const wrapper = mount(MdiCodeGreaterThanOrEqual, {});
  expect(wrapper.html()).toMatchSnapshot();
});
