
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVectorPointEdit from "../../src/components/MdiVectorPointEdit.vue";

test("MdiVectorPointEdit snapshot", () => {
  const wrapper = mount(MdiVectorPointEdit, {});
  expect(wrapper.html()).toMatchSnapshot();
});
