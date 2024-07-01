
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCogRefresh from "../../src/components/MdiCogRefresh.vue";

test("MdiCogRefresh snapshot", () => {
  const wrapper = mount(MdiCogRefresh, {});
  expect(wrapper.html()).toMatchSnapshot();
});
