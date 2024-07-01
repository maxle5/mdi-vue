
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRecordCircleOutline from "../../src/components/MdiRecordCircleOutline.vue";

test("MdiRecordCircleOutline snapshot", () => {
  const wrapper = mount(MdiRecordCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
