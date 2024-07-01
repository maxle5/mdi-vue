
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSailBoatSink from "../../src/components/MdiSailBoatSink.vue";

test("MdiSailBoatSink snapshot", () => {
  const wrapper = mount(MdiSailBoatSink, {});
  expect(wrapper.html()).toMatchSnapshot();
});
