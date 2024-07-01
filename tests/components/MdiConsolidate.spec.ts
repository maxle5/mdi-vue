
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiConsolidate from "../../src/components/MdiConsolidate.vue";

test("MdiConsolidate snapshot", () => {
  const wrapper = mount(MdiConsolidate, {});
  expect(wrapper.html()).toMatchSnapshot();
});
