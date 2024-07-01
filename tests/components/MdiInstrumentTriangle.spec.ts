
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiInstrumentTriangle from "../../src/components/MdiInstrumentTriangle.vue";

test("MdiInstrumentTriangle snapshot", () => {
  const wrapper = mount(MdiInstrumentTriangle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
