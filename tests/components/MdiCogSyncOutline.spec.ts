
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCogSyncOutline from "../../src/components/MdiCogSyncOutline.vue";

test("MdiCogSyncOutline snapshot", () => {
  const wrapper = mount(MdiCogSyncOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
