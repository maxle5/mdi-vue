
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCodeLessThan from "../../src/components/MdiCodeLessThan.vue";

test("MdiCodeLessThan snapshot", () => {
  const wrapper = mount(MdiCodeLessThan, {});
  expect(wrapper.html()).toMatchSnapshot();
});
