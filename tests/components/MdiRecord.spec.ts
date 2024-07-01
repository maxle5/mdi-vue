
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRecord from "../../src/components/MdiRecord.vue";

test("MdiRecord snapshot", () => {
  const wrapper = mount(MdiRecord, {});
  expect(wrapper.html()).toMatchSnapshot();
});
