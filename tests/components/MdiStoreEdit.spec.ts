
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStoreEdit from "../../src/components/MdiStoreEdit.vue";

test("MdiStoreEdit snapshot", () => {
  const wrapper = mount(MdiStoreEdit, {});
  expect(wrapper.html()).toMatchSnapshot();
});
