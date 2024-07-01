
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCashEdit from "../../src/components/MdiCashEdit.vue";

test("MdiCashEdit snapshot", () => {
  const wrapper = mount(MdiCashEdit, {});
  expect(wrapper.html()).toMatchSnapshot();
});
