
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStoreAlert from "../../src/components/MdiStoreAlert.vue";

test("MdiStoreAlert snapshot", () => {
  const wrapper = mount(MdiStoreAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
