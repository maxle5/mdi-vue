
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRecordCircle from "../../src/components/MdiRecordCircle.vue";

test("MdiRecordCircle snapshot", () => {
  const wrapper = mount(MdiRecordCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
