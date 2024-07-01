
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTagEdit from "../../src/components/MdiTagEdit.vue";

test("MdiTagEdit snapshot", () => {
  const wrapper = mount(MdiTagEdit, {});
  expect(wrapper.html()).toMatchSnapshot();
});
