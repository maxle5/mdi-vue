
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCodeGreaterThan from "../../src/components/MdiCodeGreaterThan.vue";

test("MdiCodeGreaterThan snapshot", () => {
  const wrapper = mount(MdiCodeGreaterThan, {});
  expect(wrapper.html()).toMatchSnapshot();
});
