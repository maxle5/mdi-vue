
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiUmbrellaClosedVariant from "../../src/components/MdiUmbrellaClosedVariant.vue";

test("MdiUmbrellaClosedVariant snapshot", () => {
  const wrapper = mount(MdiUmbrellaClosedVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
