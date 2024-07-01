
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCodeLessThanOrEqual from "../../src/components/MdiCodeLessThanOrEqual.vue";

test("MdiCodeLessThanOrEqual snapshot", () => {
  const wrapper = mount(MdiCodeLessThanOrEqual, {});
  expect(wrapper.html()).toMatchSnapshot();
});
