
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCreditCardEdit from "../../src/components/MdiCreditCardEdit.vue";

test("MdiCreditCardEdit snapshot", () => {
  const wrapper = mount(MdiCreditCardEdit, {});
  expect(wrapper.html()).toMatchSnapshot();
});
