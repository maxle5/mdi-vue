
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCogRefreshOutline from "../../src/components/MdiCogRefreshOutline.vue";

test("MdiCogRefreshOutline snapshot", () => {
  const wrapper = mount(MdiCogRefreshOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
